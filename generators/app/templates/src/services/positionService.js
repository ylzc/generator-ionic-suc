angular.module("positionService",[])
    .service("positionService", function () {
        return {
            _currentPosition: {status: false},
            _lastPosition: {},
            _positionError: {status: false, message: "GPS 信号搜索中"},
            _lowPosition: {status: false},
            getHighPosition: function () {
                if (this._currentPosition.status) {
                    return this._currentPosition;
                }
                else {
                    if (this._lastPosition.hasOwnProperty("timestamp")) {
                        var _last = new Date(this._lastPosition.timestamp).valueOf();
                        var _now = new Date().valueOf();
                        if (_now - _last < 6000) {
                            return this._lastPosition;
                        }
                        else {
                            return this._positionError;
                        }
                    }
                    else {
                        return this._positionError;
                    }
                }
            },
            getLowPosition:function(){
                if(this._lowPosition.status)
                {
                    return this._lowPosition;
                }
                else
                {
                    return this._positionError;
                }

            },
            getPosition: function () {
                if (this._currentPosition.status) {
                    return this._currentPosition;
                }
                else {
                    if (this._lastPosition.hasOwnProperty("timestamp")) {
                        var _last = new Date(this._lastPosition.timestamp).valueOf();
                        var _now = new Date().valueOf();
                        if (_now - _last < 6000) {
                            return this._lastPosition();
                        }
                        else {
                            return this.getLowPosition();
                        }
                    }
                    else {
                        return this.getLowPosition();
                    }
                }
            },
            setLowPosition: function (position) {
                this._lowPosition.coords={
                        accuracy: position.coords.accuracy,
                        altitude: position.coords.altitude,
                        altitudeAccuracy: position.coords.altitudeAccuracy,
                        heading: position.coords.heading,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        speed: position.coords.speed
                };
                this._lowPosition.timestamp=position.timestamp
                this._lowPosition.status=true;
                this._lowPosition.type = "lowPosition";
            },
            setPosition: function (position) {
                if (this._currentPosition.status) {
                    this._lastPosition = angular.copy(this._currentPosition);
                    this._lastPosition.type = "lastPosition";
                }
                this._currentPosition.coords={
                    accuracy: position.coords.accuracy,
                    altitude: position.coords.altitude,
                    altitudeAccuracy: position.coords.altitudeAccuracy,
                    heading: position.coords.heading,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    speed: position.coords.speed
                };
                this._currentPosition.timestamp=position.timestamp
                this._currentPosition.status = true;
                this._currentPosition.type = "currentPosition";
            },
            setError: function (error) {
                this._currentPosition.status = false;
                this._positionError = error;
                this._positionError.status = false;
            },
            setLowError: function (error) {
                this._lowPosition.status = false;
                this._positionError = error;
                this._positionError.status = false;
            }
        }
    })

export var positionService = "positionService"
