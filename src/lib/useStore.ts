import { useSyncExternalStore } from 'react';


export function useStore(key: string) {
    const value = useSyncExternalStore(subscribe, getSnapshot);

    function getSnapshot() {
        return localStorage.getItem(key);
    }
    
    function subscribe(callback: () => void) {
        window.addEventListener('storage', callback);
        return () => {
            window.removeEventListener('storage', callback);
        };
    }
    
    function setKey(value: string) {
        localStorage.setItem(key, value);
        window.dispatchEvent( new Event('storage') ) 
    }
    
    return [
        value,
        (s: string) => {setKey(s)}
    ] as const;
}