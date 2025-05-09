/**
 * Animates values from start to target using requestAnimationFrame for smooth performance
 * @param {Object} targetValues - Object containing the target values
 * @param {number} duration - Animation duration in milliseconds
 * @param {Function} onUpdate - Callback function that receives the current values
 * @param {Function} onComplete - Optional callback when animation completes
 * @returns {Function} - Function to cancel the animation if needed
 */
export const animateValues = (targetValues, duration, onUpdate, onComplete = null) => {
  const startTime = performance.now();
  let animationFrameId = null;
  
  // Call once immediately to avoid any initial delay
  const initialValues = {};
  Object.keys(targetValues).forEach(key => {
    initialValues[key] = 0; // Start with zero
  });
  onUpdate(initialValues);
  
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const currentValues = {};
    Object.keys(targetValues).forEach(key => {
      currentValues[key] = Math.floor(targetValues[key] * progress);
    });
    
    onUpdate(currentValues);
    
    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animate);
    } else if (onComplete) {
      onComplete();
    }
  };
  
  // Start the animation on the next frame
  animationFrameId = requestAnimationFrame(animate);
  
  // Return a function to cancel the animation if needed
  return () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  };
}; 