import { useSyncExternalStore } from 'react';


export function useStore(keyword: string) {
    const value = useSyncExternalStore(subscribe, getSnapshot);

    function getSnapshot() {
        return localStorage.getItem(keyword);
    }
    
    function subscribe(callback: () => void) {
        window.addEventListener('storage', callback);
        return () => {
            window.removeEventListener('storage', callback);
        };
    }
    
    function setKeyword(value: string) {
        localStorage.setItem(keyword, value);
        window.dispatchEvent( new Event('storage') ) 
    }
    
    return [
        value,
        (s: string) => {setKeyword(s)}
    ] as const;
}