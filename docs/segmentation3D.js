/**
 * @module segmentation3D
 */
session.segmentation3D = {
  /**
   * 
   * @method registerEvent
   * @return null
   */
  'registerEvent': function registerEvent() {
    return session.registerEvent();
  },
  /**
   * 
   * @method unregisterEvent
   * @return null
   */
  'unregisterEvent': function unregisterEvent() {
    return session.unregisterEvent();
  },
  /**
   * 
   * @method metaObject
   * @return null
   */
  'metaObject': function metaObject() {
    return session.metaObject();
  },
  /**
   * 
   * @method terminate
   * @return null
   */
  'terminate': function terminate() {
    return session.terminate();
  },
  /**
   * 
   * @method property
   * @return null
   */
  'property': function property() {
    return session.property();
  },
  /**
   * 
   * @method setProperty
   * @return null
   */
  'setProperty': function setProperty() {
    return session.setProperty();
  },
  /**
   * 
   * @method properties
   * @return null
   */
  'properties': function properties() {
    return session.properties();
  },
  /**
   * 
   * @method registerEventWithSignature
   * @return null
   */
  'registerEventWithSignature': function registerEventWithSignature() {
    return session.registerEventWithSignature();
  },
  /**
   * 
   * @method isStatsEnabled
   * @return null
   */
  'isStatsEnabled': function isStatsEnabled() {
    return session.isStatsEnabled();
  },
  /**
   * 
   * @method enableStats
   * @return null
   */
  'enableStats': function enableStats() {
    return session.enableStats();
  },
  /**
   * 
   * @method stats
   * @return null
   */
  'stats': function stats() {
    return session.stats();
  },
  /**
   * 
   * @method clearStats
   * @return null
   */
  'clearStats': function clearStats() {
    return session.clearStats();
  },
  /**
   * 
   * @method isTraceEnabled
   * @return null
   */
  'isTraceEnabled': function isTraceEnabled() {
    return session.isTraceEnabled();
  },
  /**
   * 
   * @method enableTrace
   * @return null
   */
  'enableTrace': function enableTrace() {
    return session.enableTrace();
  },
  /**
   * Exits and unregisters the module.
   * @method exit
   * @return null
   */
  'exit': function exit() {
    return session.exit();
  },
  /**
   * Internal function to pCall methods
   * @method __pCall
   * @private
   * @return null
   */
  '__pCall': function __pCall() {
    return session.__pCall();
  },
  /**
   * NAOqi1 pCall method.
   * @method pCall
   * @return null
   */
  'pCall': function pCall() {
    return session.pCall();
  },
  /**
   * Returns the version of the module.
   * @method version
   * @return A string containing the version of the module.
   */
  'version': function version() {
    return session.version();
  },
  /**
   * Just a ping. Always returns true
   * @method ping
   * @return returns true
   */
  'ping': function ping() {
    return session.ping();
  },
  /**
   * Retrieves the module's method list.
   * @method getMethodList
   * @return An array of method names.
   */
  'getMethodList': function getMethodList() {
    return session.getMethodList();
  },
  /**
   * Retrieves a method's description.
   * @method getMethodHelp
   * @param methodName - The name of the method.
   * @return A structure containing the method's description.
   */
  'getMethodHelp': function getMethodHelp(methodName) {
    return session.getMethodHelp(methodName);
  },
  /**
   * Retrieves the module's description.
   * @method getModuleHelp
   * @return A structure describing the module.
   */
  'getModuleHelp': function getModuleHelp() {
    return session.getModuleHelp();
  },
  /**
   * Wait for the end of a long running method that was called using 'post'
   * @method wait
   * @param id - The ID of the method that was returned when calling the method using 'post'
   * @param timeoutPeriod - The timeout period in ms. To wait indefinately, use a timeoutPeriod of zero.
   * @return True if the timeout period terminated. False if the method returned.
   */
  'wait': function wait(id, timeoutPeriod) {
    return session.wait(id, timeoutPeriod);
  },
  /**
   * Wait for the end of a long running method that was called using 'post', returns a cancelable future
   * @method wait
   * @param id - The ID of the method that was returned when calling the method using 'post'
   * @return null
   */
  'wait': function wait(id) {
    return session.wait(id);
  },
  /**
   * Returns true if the method is currently running.
   * @method isRunning
   * @param id - The ID of the method that was returned when calling the method using 'post'
   * @return True if the method is currently running
   */
  'isRunning': function isRunning(id) {
    return session.isRunning(id);
  },
  /**
   * returns true if the method is currently running
   * @method stop
   * @param id - the ID of the method to wait for
   * @return null
   */
  'stop': function stop(id) {
    return session.stop(id);
  },
  /**
   * Gets the name of the parent broker.
   * @method getBrokerName
   * @return The name of the parent broker.
   */
  'getBrokerName': function getBrokerName() {
    return session.getBrokerName();
  },
  /**
   * Gets the method usage string. This summarises how to use the method.
   * @method getUsage
   * @param name - The name of the method.
   * @return A string that summarises the usage of the method.
   */
  'getUsage': function getUsage(name) {
    return session.getUsage(name);
  },
  /**
   * Subscribes to the extractor. This causes the extractor to start writing information to memory using the keys described by getOutputNames(). These can be accessed in memory using ALMemory.getData("keyName"). In many cases you can avoid calling subscribe on the extractor by just calling ALMemory.subscribeToEvent() supplying a callback method. This will automatically subscribe to the extractor for you.
   * @method subscribe
   * @param name - Name of the module which subscribes.
   * @param period - Refresh period (in milliseconds) if relevant.
   * @param precision - Precision of the extractor if relevant.
   * @return null
   */
  'subscribe': function subscribe(name, period, precision) {
    return session.subscribe(name, period, precision);
  },
  /**
   * Subscribes to the extractor. This causes the extractor to start writing information to memory using the keys described by getOutputNames(). These can be accessed in memory using ALMemory.getData("keyName"). In many cases you can avoid calling subscribe on the extractor by just calling ALMemory.subscribeToEvent() supplying a callback method. This will automatically subscribe to the extractor for you.
   * @method subscribe
   * @param name - Name of the module which subscribes.
   * @return null
   */
  'subscribe': function subscribe(name) {
    return session.subscribe(name);
  },
  /**
   * Unsubscribes from the extractor.
   * @method unsubscribe
   * @param name - Name of the module which had subscribed.
   * @return null
   */
  'unsubscribe': function unsubscribe(name) {
    return session.unsubscribe(name);
  },
  /**
   * Updates the period if relevant.
   * @method updatePeriod
   * @param name - Name of the module which has subscribed.
   * @param period - Refresh period (in milliseconds).
   * @return null
   */
  'updatePeriod': function updatePeriod(name, period) {
    return session.updatePeriod(name, period);
  },
  /**
   * Updates the precision if relevant.
   * @method updatePrecision
   * @param name - Name of the module which has subscribed.
   * @param precision - Precision of the extractor.
   * @return null
   */
  'updatePrecision': function updatePrecision(name, precision) {
    return session.updatePrecision(name, precision);
  },
  /**
   * Gets the current period.
   * @method getCurrentPeriod
   * @return Refresh period (in milliseconds).
   */
  'getCurrentPeriod': function getCurrentPeriod() {
    return session.getCurrentPeriod();
  },
  /**
   * Gets the current precision.
   * @method getCurrentPrecision
   * @return Precision of the extractor.
   */
  'getCurrentPrecision': function getCurrentPrecision() {
    return session.getCurrentPrecision();
  },
  /**
   * Gets the period for a specific subscription.
   * @method getMyPeriod
   * @param name - Name of the module which has subscribed.
   * @return Refresh period (in milliseconds).
   */
  'getMyPeriod': function getMyPeriod(name) {
    return session.getMyPeriod(name);
  },
  /**
   * Gets the precision for a specific subscription.
   * @method getMyPrecision
   * @param name - name of the module which has subscribed
   * @return precision of the extractor
   */
  'getMyPrecision': function getMyPrecision(name) {
    return session.getMyPrecision(name);
  },
  /**
   * Gets the parameters given by the module.
   * @method getSubscribersInfo
   * @return Array of names and parameters of all subscribers.
   */
  'getSubscribersInfo': function getSubscribersInfo() {
    return session.getSubscribersInfo();
  },
  /**
   * Get the list of values updated in ALMemory.
   * @method getOutputNames
   * @return Array of values updated by this extractor in ALMemory
   */
  'getOutputNames': function getOutputNames() {
    return session.getOutputNames();
  },
  /**
   * Get the list of events updated in ALMemory.
   * @method getEventList
   * @return Array of events updated by this extractor in ALMemory
   */
  'getEventList': function getEventList() {
    return session.getEventList();
  },
  /**
   * Get the list of events updated in ALMemory.
   * @method getMemoryKeyList
   * @return Array of events updated by this extractor in ALMemory
   */
  'getMemoryKeyList': function getMemoryKeyList() {
    return session.getMemoryKeyList();
  },
  /**
   * Gets extractor pause status
   * @method isPaused
   * @return True if the extractor is paused, False if not
   */
  'isPaused': function isPaused() {
    return session.isPaused();
  },
  /**
   * Changes the pause status of the extractor
   * @method pause
   * @param status - New pause satus
   * @return null
   */
  'pause': function pause(status) {
    return session.pause(status);
  },
  /**
   * Gets extractor running status
   * @method isProcessing
   * @return True if the extractor is currently processing images, False if not
   */
  'isProcessing': function isProcessing() {
    return session.isProcessing();
  },
  /**
   * Sets extractor framerate
   * @method setFrameRate
   * @param value - New framerate
   * @return True if the update succeeded, False if not
   */
  'setFrameRate': function setFrameRate(value) {
    return session.setFrameRate(value);
  },
  /**
   * Gets extractor framerate
   * @method getFrameRate
   * @return Current value of the framerate of the extractor
   */
  'getFrameRate': function getFrameRate() {
    return session.getFrameRate();
  },
  /**
   * Sets extractor resolution
   * @method setResolution
   * @param resolution - New resolution
   * @return True if the update succeeded, False if not
   */
  'setResolution': function setResolution(resolution) {
    return session.setResolution(resolution);
  },
  /**
   * Gets extractor resolution
   * @method getResolution
   * @return Current value of the resolution of the extractor
   */
  'getResolution': function getResolution() {
    return session.getResolution();
  },
  /**
   * Sets extractor active camera
   * @method setActiveCamera
   * @param cameraId - Id of the camera that will become the active camera
   * @return True if the update succeeded, False if not
   */
  'setActiveCamera': function setActiveCamera(cameraId) {
    return session.setActiveCamera(cameraId);
  },
  /**
   * Gets extractor active camera
   * @method getActiveCamera
   * @return Id of the current active camera of the extractor
   */
  'getActiveCamera': function getActiveCamera() {
    return session.getActiveCamera();
  },
  /**
   * Returns the position of the top of the blob most in the center of the depth image, at the given distance, in the given frame.
   * @method getTopOfBlob
   * @param distance - Estimation of the distance (in meters) of the blob or -1 for the nearest blob
   * @param frame - Frame in which to return the position (-1: FRAME_IMAGE, 0: FRAME_TORSO, 1: FRAME_WORLD, 2: FRAME_ROBOT
   * @param applyVerticalOffset - True to apply the VerticalOffset when computing the position, False otherwise
   * @return Position of the top of the corresponding blob (if one is found) in the given frame (Format: [yaw,pitch,distance] in FRAME_IMAGE, [x,y,z] in the other frame).
   */
  'getTopOfBlob': function getTopOfBlob(distance, frame, applyVerticalOffset) {
    return session.getTopOfBlob(distance, frame, applyVerticalOffset);
  },
  /**
   * Turn the blob tracker on or off. When the blob tracker is running, events containing the position of the top of the tracked blob are raised.
   * @method setBlobTrackingEnabled
   * @param status - True to turn it on, False to turn it off.
   * @return null
   */
  'setBlobTrackingEnabled': function setBlobTrackingEnabled(status) {
    return session.setBlobTrackingEnabled(status);
  },
  /**
   * Gets the current status of the blob tracker. When the blob tracker is running, events containing the position of the top of the tracked blob are raised.
   * @method isBlobTrackingEnabled
   * @return True if the blob tracker is enabled, False otherwise.
   */
  'isBlobTrackingEnabled': function isBlobTrackingEnabled() {
    return session.isBlobTrackingEnabled();
  },
  /**
   * Sets the distance (in meters) for the blob tracker
   * @method setBlobTrackingDistance
   * @param distance - New value (in meters)
   * @return null
   */
  'setBlobTrackingDistance': function setBlobTrackingDistance(distance) {
    return session.setBlobTrackingDistance(distance);
  },
  /**
   * Gets the distance (in meters) for the blob tracker
   * @method getBlobTrackingDistance
   * @return null
   */
  'getBlobTrackingDistance': function getBlobTrackingDistance() {
    return session.getBlobTrackingDistance();
  },
  /**
   * Sets the value of vertical offset (in meters) for the blob tracker
   * @method setVerticalOffset
   * @param value - New vertical offset (in meters), added if positive, substracted if negative
   * @return null
   */
  'setVerticalOffset': function setVerticalOffset(value) {
    return session.setVerticalOffset(value);
  },
  /**
   * Sets the value of vertical offset (in meters) for the blob tracker
   * @method getVerticalOffset
   * @return Current vertical offset of the blob tracker
   */
  'getVerticalOffset': function getVerticalOffset() {
    return session.getVerticalOffset();
  },
  /**
   * Sets the value of the depth threshold (in meters) used for the segmentation
   * @method setDeltaDepthThreshold
   * @param value - New depth threshold (in meters) for the segmentation
   * @return null
   */
  'setDeltaDepthThreshold': function setDeltaDepthThreshold(value) {
    return session.setDeltaDepthThreshold(value);
  },
  /**
   * Gets the value of the depth threshold (in meters) used for the segmentation
   * @method getDeltaDepthThreshold
   * @return Current depth threshold (in meters)
   */
  'getDeltaDepthThreshold': function getDeltaDepthThreshold() {
    return session.getDeltaDepthThreshold();
  },
};