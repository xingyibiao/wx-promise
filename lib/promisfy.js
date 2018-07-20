/**
 * 全部设置promis工厂方法
 * @param  {function} target
 * @param  {object} option
 * @return Promise<any>
 */
export function toPromisify(target) {
  if (target) {
    return (arg) => new Promise((resolve, reject) => {
      arg.success = (res) => {
        resolve(res)
      }
  
      arg.fail = (err) => {
        reject(err)
      }
  
      target(arg)
    })
  }
}

const funcs = [
  'request',
  'uploadFile', 
  'downloadFile', 
  'connectSocket', 
  'chooseImage', 
  'previewImage', 
  'getImageInfo', 
  'saveImageToPhotosAlbum',
  'startRecord',
  'startRecord',
  'playVoice',
  'pauseVoice',
  'stopVoice',
  'getBackgroundAudioPlayerState',
  'playBackgroundAudio',
  'seekBackgroundAudio',
  'getAvailableAudioSources',
  'chooseVideo',
  'saveVideoToPhotosAlbum',
  'loadFontFace',
  'saveFile',
  'getFileInfo',
  'getSavedFileList',
  'getSavedFileInfo',
  'removeSavedFile',
  'openDocument',
  'setStorage',
  'setStorageSync',
  'getStorage',
  'getStorageSync',
  'getStorageInfo',
  'removeStorage',
  'getLocation',
  'chooseLocation',
  'openLocation',
  'getSystemInfo',
  'getNetworkType',
  'startAccelerometer',
  'stopAccelerometer',
  'startCompass',
  'stopCompass',
  'makePhoneCall',
  'scanCode',
  'setClipboardData',
  'getClipboardData',
  'openBluetoothAdapter',
  'closeBluetoothAdapter',
  'getBluetoothAdapterState',
  'startBluetoothDevicesDiscovery',
  'stopBluetoothDevicesDiscovery',
  'getBluetoothDevices',
  'getConnectedBluetoothDevices',
  'createBLEConnection',
  'closeBLEConnection',
  'getBLEDeviceServices',
  'startBeaconDiscovery',
  'stopBeaconDiscovery',
  'getBeacons',
  'setScreenBrightness',
  'getScreenBrightness',
  'setKeepScreenOn',
  'vibrateLong',
  'vibrateShort',
  'addPhoneContact',
  'getHCEState',
  'startWifi',
  'stopWifi',
  'connectWifi',
  'getWifiList',
  'setWifiList',
  'getConnectedWifi',
  'showToast',
  'showLoading',
  'showModal',
  'showActionSheet',
  'setNavigationBarTitle',
  'setNavigationBarColor',
  'setTabBarBadge',
  'removeTabBarBadge',
  'showTabBarRedDot',
  'hideTabBarRedDot',
  'setTabBarStyle',
  'setTabBarItem',
  'showTabBar',
  'hideTabBar',
  'setTopBarText',
  'navigateTo',
  'redirectTo',
  'switchTab',
  'startPullDownRefresh',
  'getExtConfig',
  'login',
  'checkSession',
  'authorize',
  'getUserInfo',
  'requestPayment',
  'showShareMenu',
  'hideShareMenu',
  'updateShareMenu',
  'getShareInfo',
  'chooseAddress',
  'addCard',
  'openCard',
  'openSetting',
  'getSetting',
  'getWeRunData',
  'navigateToMiniProgram',
  'navigateBackMiniProgram',
  'chooseInvoiceTitle',
  'checkIsSupportSoterAuthentication',
  'startSoterAuthentication',
  'checkIsSoterEnrolledInDevice',
]

export const promisifys = {}

funcs
  .forEach((f) => {
    if (wx[f]) {
      promisifys[f] = toPromisify(wx[f])
    }
  })
