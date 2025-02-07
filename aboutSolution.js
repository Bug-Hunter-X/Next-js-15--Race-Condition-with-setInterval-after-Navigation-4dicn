```javascript
// pages/about.js
import {useEffect, useRef, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>The count is: {count}</p>
    </div>
  );
}
```