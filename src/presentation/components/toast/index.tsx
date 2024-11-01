import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { styles } from './style';

const toastVariants = {
  default: { backgroundColor: '#333333' },
  destructive: { backgroundColor: '#EF4444' },
  success: { backgroundColor: '#10B981' },
  info: { backgroundColor: '#3B82F6' },
};

interface ToastProps {
  id: number;
  message: string;
  onHide: (id: number) => void;
  variant?: keyof typeof toastVariants;
  duration?: number;
  showProgress?: boolean;
}

function Toast({
  id,
  message,
  onHide,
  variant = 'default',
  duration = 3000,
  showProgress = true,
}: ToastProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(progress, {
        toValue: 1,
        duration: duration - 1000,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => onHide(id));
  }, [duration]);

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        toastVariants[variant],
        {
          opacity,
          transform: [
            {
              translateY: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [-20, 0],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.message}>{message}</Text>
      {showProgress && (
        <View style={styles.progressContainer}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>
      )}
    </Animated.View>
  );
}

type ToastVariant = keyof typeof toastVariants;

interface ToastMessage {
  id: number;
  text: string;
  variant: ToastVariant;
  duration?: number;
  position?: string;
  showProgress?: boolean;
}

interface ToastContextProps {
  toast: (
    message: string,
    variant?: keyof typeof toastVariants,
    duration?: number,
    position?: 'top' | 'bottom',
    showProgress?: boolean
  ) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

function ToastProvider({
  children,
  position = 'top',
}: {
  children: React.ReactNode;
  position?: 'top' | 'bottom';
}) {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const toast: ToastContextProps['toast'] = (
    message: string,
    variant: ToastVariant = 'default',
    duration: number = 3000,
    position: 'top' | 'bottom' = 'top',
    showProgress: boolean = true
  ) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: message,
        variant,
        duration,
        position,
        showProgress,
      },
    ]);
  };

  const removeToast = (id: number) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      <View
        style={[
          styles.toastWrapper,
          position === 'top' ? styles.topPosition : styles.bottomPosition,
        ]}
      >
        {messages.map((message) => (
          <Toast
            key={message.id}
            id={message.id}
            message={message.text}
            variant={message.variant}
            duration={message.duration}
            showProgress={message.showProgress}
            onHide={removeToast}
          />
        ))}
      </View>
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

export { ToastProvider, ToastVariant, Toast, toastVariants, useToast };
