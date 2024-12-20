import {useState, useEffect } from "react";

export function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);
  
    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);
    
    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  
    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);
  
    return scrollbarWidth;
      
}

export function useBodyScrollable() {
	const [bodyScrollable, setBodyScrollable] = useState(document.body.scrollHeight > window.innerHeight)

	useEffect(() => {
		const resizeObserver = new ResizeObserver(() => {
			setBodyScrollable(document.body.scrollHeight > window.innerHeight)
		})
		resizeObserver.observe(document.body)
		return () => {
			resizeObserver.unobserve(document.body)
		}
	}, [])

	return bodyScrollable;
}

/* //* Add the following code to your root page displaying your elements 
  ///! Possible problem: screen takes one frame to adjust resulting in jitter

    const scrollbarWidth = getScrollbarWidth()

    const bodyScrollable = useBodyScrollable()

    useEffect(() => {
        if (bodyScrollable) {
            document.body.style.paddingRight = '0px'
        } else {
            document.body.style.paddingRight = `${scrollbarWidth}px`
        }
    }, [bodyScrollable])

*/