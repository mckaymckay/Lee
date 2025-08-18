/**
 * LRU缓存：least recently used，优先删除最少使用的数据
 */

class LRUChche {
    constructor(capacity) {
        this.capacity = capacity; // 缓存容量
        this.cache = new Map(); // 使用Map存储缓存数据，能够按照顺序排列所有键
    }

    get(key) {
        if (!this.cache.has(key)) {
            return null
        }
        // 将最新访问的数据移动到最新位置
        const value = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, value)

        return value
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size >= this.capacity) {
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }
        this.cache.set(key, value)
    }
}

const cache = new LRUChche(2)
cache.put('aa', 1)
cache.put('bb', 2)
console.log(cache) // LRUChche { capacity: 2, cache: Map(2) { 'aa' => 1, 'bb' => 2 } }
cache.put('cc', 3)
console.log(cache) // LRUChche { capacity: 2, cache: Map(2) { 'bb' => 2, 'cc' => 3 } }
console.log(cache.get('aa')) // null
console.log(cache.get('bb')) // 2