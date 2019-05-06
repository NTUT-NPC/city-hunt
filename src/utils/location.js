// 封裝成 promise
function getCurrentPosition () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true })
  })
}

/**
 * 取得自身位置經緯度
 *
 * @export
 * @returns 經緯度: { lat: number, lng: number }
 */
export async function getSelfLocation () {
  if ('geolocation' in navigator) {
    const permissionStatus = await navigator.permissions.query({ name: 'geolocation' })
    if (permissionStatus.state === 'denied') {
      throw Error('Permission denied')
    } else {
      const { coords } = await getCurrentPosition()
      return {
        lat: coords.latitude,
        lng: coords.longitude
      }
    }
  } else {
    throw Error('Geolocation is not available')
  }
}

/**
 * 取得 A, B 兩地直線距離
 *
 * @export
 * @param {*} {
 *   locationA: {
 *     lat: number,
 *     lng: number
 *   },
 *   locationB: {
 *     lat: number,
 *     lng: number
 *   },
 * }
 * @returns 距離(m): number
 */

export function getDistance ({
  locationA, locationB
}) {
  const EARTH_RADIUS = 6378.137
  let radLatA = locationA.lat * Math.PI / 180.0
  let radLatB = locationB.lat * Math.PI / 180.0
  let a = radLatA - radLatB
  let b = locationA.lng * Math.PI / 180.0 - locationB.lng * Math.PI / 180.0
  let distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
    Math.cos(radLatA) * Math.cos(radLatB) * Math.pow(Math.sin(b / 2), 2)))
  distance = distance * EARTH_RADIUS
  distance = Math.round(distance * 10000) / 10
  return distance
}
