var json = '{ "value" : 9223372036854775807, "v2": 123 }';

var v = JSON.parse(json)
console.log(v);

import JSONbig from 'json-bigint'

// 1.这个玩意可以帮我们自动切割大数字
// 2.怎么复原（拼接）？直接toString转成字符串就复原了
var v2 = JSONbig.parse(json)

console.log(v2.value);

console.log(v2.value.toString());
