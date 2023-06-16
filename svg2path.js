/**
 * @param  tagName  标签名（"path", "rect", "line", "circle", "ellipse", "polyline", "polygon"）
 * @param  attribute  属性
 * @returns String path路径字符串
 */
function svg2Path(tagName, attribute) {
  // 匹配路径中数值的正则
  var regNumber = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g
  var path = '';
  switch (tagName) {
    case 'path':
      path = attribute['d'];
      break;
    case 'rect':
      var x = Number(attribute['x'])
      var y = Number(attribute['y'])
      var width = Number(attribute['width'])
      var height = Number(attribute['height'])
      /*
       * rx 和 ry 的规则：
       * 1. 如果其中一个设置为 0 则圆角不生效
       * 2. 如果有一个没有设置则取值为另一个
       * 3.rx 的最大值为 width 的一半, ry 的最大值为 height 的一半
       */
      var rx = Number(attribute['rx']) || Number(attribute['ry']) || 0
      var ry = Number(attribute['ry']) || Number(attribute['rx']) || 0

      rx = rx > (width / 2) ? width / 2 : rx
      ry = ry > (height / 2) ? height / 2 : ry

      // 如果其中一个设置为 0 则圆角不生效
      if (rx == 0 || ry == 0) {
        path =
          'M' + x + ' ' + y + 'h' + width + 'v' + height + 'h' + -width + 'z'
      } else {
        path =
          'M' +
          x +
          ' ' +
          (y + ry) +
          'a' +
          rx +
          ' ' +
          ry +
          ' 0 0 1 ' +
          rx +
          ' ' +
          -ry +
          'h' +
          (width - rx - rx) +
          'a' +
          rx +
          ' ' +
          ry +
          ' 0 0 1 ' +
          rx +
          ' ' +
          ry +
          'v' +
          (height - ry - ry) +
          'a' +
          rx +
          ' ' +
          ry +
          ' 0 0 1 ' +
          -rx +
          ' ' +
          ry +
          'h' +
          (rx + rx - width) +
          'a' +
          rx +
          ' ' +
          ry +
          ' 0 0 1 ' +
          -rx +
          ' ' +
          -ry +
          'z'
      }

      break

    case 'circle':
      var { cx, cy, r } = attribute;
      path =
        'M' +
        (cx - r) +
        ' ' +
        cy +
        'a' +
        r +
        ' ' +
        r +
        ' 0 1 0 ' +
        2 * r +
        ' 0' +
        'a' +
        r +
        ' ' +
        r +
        ' 0 1 0 ' +
        -2 * r +
        ' 0' +
        'z'

      break

    case 'ellipse':
      var cx = attribute['cx'] * 1
      var cy = attribute['cy'] * 1
      var rx = attribute['rx'] * 1
      var ry = attribute['ry'] * 1

      if (isNaN(cx - cy + rx - ry)) return
      path =
        'M' +
        (cx - rx) +
        ' ' +
        cy +
        'a' +
        rx +
        ' ' +
        ry +
        ' 0 1 0 ' +
        2 * rx +
        ' 0' +
        'a' +
        rx +
        ' ' +
        ry +
        ' 0 1 0 ' +
        -2 * rx +
        ' 0' +
        'z'

      break

    case 'line':
      var { x1, y1, x2, y2 } = attribute;
      if (isNaN(x1 - y1 + (x2 - y2))) {
        return
      }

      path = 'M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2

      break

    case 'polygon':
    case 'polyline':
      // ploygon与polyline是一样的,polygon多边形，polyline折线
      var points = (attribute['points'].match(regNumber) || []).map(Number)
      if (points.length < 4) {
        return
      }
      path =
        'M' +
        points.slice(0, 2).join(' ') +
        'L' +
        points.slice(2).join(' ') +
        (tagName === 'polygon' ? 'z' : '')

      break
  }
  return path || '';
};
module.exports = svg2Path;