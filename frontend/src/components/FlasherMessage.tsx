import { useLocation } from 'react-router-dom';
import './flasherMessage.css';
import { useEffect, useState } from 'react';
import { Flasher } from '../types/flasher';

export default function FlasherMessage() {
  const [flasher, setFlasher] = useState<Flasher | null>(null);
  const location = useLocation();
  const locationFlasher: Flasher = location.state?.flasher;

  useEffect(() => {
    if (locationFlasher) setFlasher(locationFlasher);
    const timer = setTimeout(() => {
      setFlasher(null);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [location, locationFlasher]);

  return (
    flasher && (
      <div
        className={
          flasher.status ? 'flasher-message-success' : 'flasher-message-failed'
        }
      >
        {flasher.message}
      </div>
    )
  );
}
