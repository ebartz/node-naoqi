/**
 * @module visionRecognition
 */
session.visionRecognition = {
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
   * Sets the extractor framerate for a chosen subscriber
   * @method setFrameRate
   * @param subscriberName - Name of the subcriber
   * @param framerate - New framerate
   * @return True if the update succeeded, False if not
   */
  'setFrameRate': function setFrameRate(subscriberName, framerate) {
    return session.setFrameRate(subscriberName, framerate);
  },
  /**
   * Sets the extractor framerate for all the subscribers
   * @method setFrameRate
   * @param framerate - New framerate
   * @return True if the update succeeded, False if not
   */
  'setFrameRate': function setFrameRate(framerate) {
    return session.setFrameRate(framerate);
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
   * Sets extractor active camera
   * @method setActiveCamera
   * @param cameraId - Id of the camera that will become the active camera
   * @return True if the update succeeded, False if not
   */
  'setActiveCamera': function setActiveCamera(cameraId) {
    return session.setActiveCamera(cameraId);
  },
  /**
   * DEPRECATED: Sets pause and resolution
   * @method setParameter
   * @param paramName - Name of the parameter to set
   * @param value - New value
   * @return null
   */
  'setParameter': function setParameter(paramName, value) {
    return session.setParameter(paramName, value);
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
   * Gets extractor resolution
   * @method getResolution
   * @return Current value of the resolution of the extractor
   */
  'getResolution': function getResolution() {
    return session.getResolution();
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
   * Gets extractor pause status
   * @method isPaused
   * @return True if the extractor is paused, False if not
   */
  'isPaused': function isPaused() {
    return session.isPaused();
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
   * Changes the pause status of the extractor
   * @method pause
   * @param paused - New pause satus
   * @return null
   */
  'pause': function pause(paused) {
    return session.pause(paused);
  },
  /**
   * 
   * @method _run
   * @private
   * @return null
   */
  '_run': function _run() {
    return session._run();
  },
  /**
   * By default the database has the name "current" and is on the robot in /home/nao/naoqi/share/naoqi/vision/visionrecognition/ folder. This bound method allows to choose both another name and another folder for the database. 

   * @method changeDatabase
   * @param databasePath - Absolute path of the database on the robot, or "" to set default path.
   * @param databaseName - Name of the database folder, or "" to set default database folder.
   * @return True if the operation succeded, false otherwise.
   */
  'changeDatabase': function changeDatabase(databasePath, databaseName) {
    return session.changeDatabase(databasePath, databaseName);
  },
  /**
   * Clear the current database, the user has to be warned before calling this function.
   * @method clearCurrentDatabase
   * @return null
   */
  'clearCurrentDatabase': function clearCurrentDatabase() {
    return session.clearCurrentDatabase();
  },
  /**
   * Set vision recognition parameters (deprecated in 1.22)
   * @method setParam
   * @param paramName - Name of the parameter to be changed. Only "resolution" can be used.
   * @param paramValue - Value of the resolution as an integer: 0(QQVGA) 1(QVGA) 2(VGA)
   * @return null
   */
  'setParam': function setParam(paramName, paramValue) {
    return session.setParam(paramName, paramValue);
  },
  /**
   * Get some vision recognition parameters.
   * @method getParam
   * @param paramName - The name of the parameter to get. "db_path" and "db_name" can be used.
   * @return Value of the parameter as a string for "db_path" and "db_name"
   */
  'getParam': function getParam(paramName) {
    return session.getParam(paramName);
  },
  /**
   * Load an image and interpret it as an object.
   * @method learnFromFile
   * @param filename - The filename of the image that will be interpreted as a planar object.
   * @param name - The name of the object (used as a unique identifier).
   * @param tags - A list of tags (as strings) containing any met-data about your object.
   * @param isWholeImage - indicates if the object occupies the whole image. If set to false, visionrecognition will try to detect the border of the object automatically. This works with unicolor background where object stands out well from the background. By default, this is set to true.
   * @param forced - indicates if learned object will replace existing object (having the same original name) if any.
   * @return True if the operation succeded, false otherwise.
   */
  'learnFromFile': function learnFromFile(filename, name, tags, isWholeImage, forced) {
    return session.learnFromFile(filename, name, tags, isWholeImage, forced);
  },
  /**
   * Set the maximal number (not more than 10) of detected objects for each detection. By default, this is set to 1.
   * @method setMaxOutObjs
   * @param iMaxOutObjs - number of desired objects to be detected.
   * @return null
   */
  'setMaxOutObjs': function setMaxOutObjs(iMaxOutObjs) {
    return session.setMaxOutObjs(iMaxOutObjs);
  },
  /**
   * Get the maximal number of detected objects for each detection.
   * @method getMaxOutObjs
   * @return number of maximal objects to be detected.
   */
  'getMaxOutObjs': function getMaxOutObjs() {
    return session.getMaxOutObjs();
  },
  /**
   * Get number of objects in the current database.
   * @method getSize
   * @return number of objects in the current database.
   */
  'getSize': function getSize() {
    return session.getSize();
  },
  /**
   * Remove an obbject with a specific hash from the DB (Attention: All files related to this object will be deleted.)
   * @method _removeObject
   * @private
   * @param hash - the hash (as a string) of the object to be deleted.
   * @return null
   */
  '_removeObject': function _removeObject(hash) {
    return session._removeObject(hash);
  },
  /**
   * Load an image and search for known objects.
   * @method detectFromFile
   * @param image - The image that will be searched for known objects.
   * @return null
   */
  'detectFromFile': function detectFromFile(image) {
    return session.detectFromFile(image);
  },
  /**
   * Return the default directory used for databases storage.
   * @method getDefaultDatabaseDirectory
   * @return Default directory used for databases storage.
   */
  'getDefaultDatabaseDirectory': function getDefaultDatabaseDirectory() {
    return session.getDefaultDatabaseDirectory();
  },
  /**
   * Return the default database name.
   * @method getDefaultDatabaseName
   * @return Default database name.
   */
  'getDefaultDatabaseName': function getDefaultDatabaseName() {
    return session.getDefaultDatabaseName();
  },
  /**
   * Upload a zipped database to the robot.
   * @method sendDatabase
   * @param name - Database name.
   * @param file - Archive (ZIP) containing the database file.
   * @return null
   */
  'sendDatabase': function sendDatabase(name, file) {
    return session.sendDatabase(name, file);
  },
};
