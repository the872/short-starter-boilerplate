import { useState, useEffect } from 'react';

const InstallPWAButton = () => {
    const [isInstalled, setIsInstalled] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (event) => {
            event.preventDefault();
            setDeferredPrompt(event);
        });

        window.addEventListener('appinstalled', () => {
            setIsInstalled(true);
        });
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    setIsInstalled(true);
                }
                setDeferredPrompt(null);
            });
        }
    };

    return (
        <button onClick={handleInstallClick} disabled={isInstalled} style={{ borderRadius: '1rem', background: '#ffffff', color: '#000000', cursor: 'pointer', margin: '1rem', padding: '1rem' }}>
            {isInstalled ? 'Installed!' : 'Install PWA'}
        </button>
    );
};

export default InstallPWAButton;
