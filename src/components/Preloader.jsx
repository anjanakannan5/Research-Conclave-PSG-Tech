import { useEffect, useState } from "react";

function Preloader() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(t);
    }, []); 
    if (!loading) return null;
    return (
        <>
            {/* Preloader */}
            <div className="site-preloader" id="preloader">
                <div className="animation-preloader">
                    <div className="spinner" />
                    <div className="text-loading">
                    <span data-text-preloader="P" className="letters-loading">P</span>
                    <span data-text-preloader="S" className="letters-loading">S</span>
                    <span data-text-preloader="G" className="letters-loading">G</span>
                    <span data-text-preloader="T" className="letters-loading">T</span>
                    <span data-text-preloader="e" className="letters-loading">e</span>
                    <span data-text-preloader="c" className="letters-loading">c</span>
                    <span data-text-preloader="h" className="letters-loading">h</span>
                </div>
                <p className="loading-text">Loading</p>
            </div>
            <div className="preloader-layer layer-one">
                <div className="overly" /></div>
                <div className="preloader-layer layer-two">
                    <div className="overly" />
                </div>
                <div className="preloader-layer layer-three">
                    <div className="overly" />
                </div>
            </div>
        </>
    );
}

export default Preloader;