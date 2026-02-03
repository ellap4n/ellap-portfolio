import { useState, useEffect } from 'react';

function InstagramFeed() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://feeds.behold.so/1bi4IJKDGwUnOetMfBXN')
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts);
                setLoading(false);
            })
            .catch(err => {
                console.error('Behold fetch error:', err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '20px' }}>Instagram</h2>
            <div style={{
                columnCount: '3',
                columnGap: '10px',
                maxWidth: '700px',
                margin: '0 auto'
            }}>
                {posts.map((post) => (
                    <a
                        key={post.id}
                        href={post.permalink}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '0px',
                            display: 'block',
                            marginBottom: '10px',
                            breakInside: 'avoid'
                        }}
                    >
                        <img
                            src={post.sizes.medium.mediaUrl}
                            alt={post.caption || 'Instagram post'}
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                borderRadius: '0px',
                                transition: 'filter 0.3s ease, transform 0.3s ease'
                            }}
                            onMouseEnter={e => {
                                e.target.style.filter = 'brightness(0.7)';
                                e.target.style.transform = 'scale(1.02)';
                            }}
                            onMouseLeave={e => {
                                e.target.style.filter = 'brightness(1)';
                                e.target.style.transform = 'scale(1)';
                            }}
                        />
                        {/* Carousel indicator */}
                        {post.mediaType === 'CAROUSEL_ALBUM' && (
                            <div style={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                                background: 'rgba(0,0,0,0.5)',
                                color: 'white',
                                padding: '2px 6px',
                                borderRadius: '10px',
                                fontSize: '12px'
                            }}>
                                +{post.children.length - 1}
                            </div>
                        )}
                    </a>
                ))}
            </div>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'right', marginTop: '15px' }}>
                <a
                    href="https://www.instagram.com/llechyi"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        fontSize: '14px',
                        color: '#04326b',
                        textDecoration: 'none',
                        padding: '8px 16px',
                        border: '1px solid #04326b',
                        borderRadius: '20px',
                        display: 'inline-block',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => {
                        e.target.style.backgroundColor = '#818e9e';
                        e.target.style.color = '#ffffff';
                    }}
                    onMouseLeave={e => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#04326b';
                    }}
                >
                    See More →
                </a>
            </div>
        </div>
    );
}

export default InstagramFeed;