import { useEffect } from 'react';

function InstagramFeed() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
        script.async = true;
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    return (
        <div>
            <iframe
                src="https://lightwidget.com/widgets/82ebcf7287be52fe8431ff2751b49785.html"
                scrolling="no"
                allowTransparency={true}
                className="lightwidget-widget"
                style={{ width: '100%', border: 0, overflow: 'hidden' }}
            />
        </div>
    );
}

export default InstagramFeed;