import { createContext, useState, useCallback, useContext } from 'react';
import './Toast.css';

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toast, setToast] = useState({ message: '', visible: false, type: 'success' });

    const showToast = useCallback((message, type = 'success') => {
        setToast({ message, visible: true, type });
        setTimeout(() => {
            setToast((prev) => ({ ...prev, visible: false }));
        }, 3000);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className={`toast-notification ${toast.visible ? 'show' : ''} ${toast.type}`}>
                {toast.message}
            </div>
        </ToastContext.Provider>
    );
}

export const useToast = () => useContext(ToastContext);
