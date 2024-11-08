import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook for implementing infinite scrolling.
 *
 * @description This hook uses the Intersection Observer API to detect when the last element in a list
 * is in view and triggers a load more action if there are more items to load.
 *
 * @param {Object} params - Parameters for configuring the infinite scroll.
 * @param {Function} params.loadMore - Function to load more items. Should return a Promise.
 * @param {boolean} params.hasMore - Boolean indicating if there are more items to load.
 * @param {boolean} params.isLoading - Boolean indicating if items are currently loading.
 * @param {number} [params.threshold=1.0] - Intersection threshold (0.0 - 1.0) for triggering loadMore.
 *
 * @returns {Object} - Returns an object with properties to manage infinite scroll.
 * @returns {Function} return.setLastElement - Setter for the last element to observe.
 * @returns {boolean} return.isFetching - Boolean indicating if a fetch operation is ongoing.
 */
function useInfiniteScroll({ loadMore, hasMore, isLoading, threshold = 1.0 }) {
    // Ref for the observer instance
    const observerRef = useRef(null);
    // State to keep track of the last observed element
    const [lastElement, setLastElement] = useState(null);
    // State to indicate if the hook is fetching more items
    const [isFetching, setIsFetching] = useState(false);
    // State to track if this is the initial load of items

    /**
     * Callback function to handle intersection events.
     * If the observed element is intersecting, more items are loaded if available.
     *
     * @param {IntersectionObserverEntry[]} entries - Array of intersection observer entries.
     */
    const handleIntersection = useCallback(
        ([entry]) => {
            if (entry.isIntersecting && hasMore && !isLoading && !isFetching) {
                setIsFetching(true);
                // Trigger load more action and set fetching to false upon completion
                loadMore().finally(() => setIsFetching(false));
            }
        },
        [hasMore, isLoading, loadMore, isFetching]
    );

    /**
     * Effect to set up the Intersection Observer and observe the last element.
     * Re-observes the last element if it changes.
     */
    useEffect(() => {
        if (isLoading || isFetching) return;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold,
        };

        // Initialize observer with the provided options and callback
        observerRef.current = new IntersectionObserver(handleIntersection, options);

        const currentElement = lastElement;
        if (currentElement) observerRef.current.observe(currentElement);

        return () => {
            // Clean up by unobserving the last element
            if (observerRef.current && currentElement) {
                observerRef.current.unobserve(currentElement);
                observerRef.current.disconnect();
            }
        };
    }, [lastElement, threshold, handleIntersection, isLoading, isFetching]);

    return { setLastElement, isFetching };
}

export default useInfiniteScroll;
