let arr = ['1.0.1', '0.1', '1.3.26', '1.0.3.29', '2.1.3', '1.0.9.7.25']

function sortVersions(versions) {
    return versions.sort((a, b) => {
        const partsA = a.split('.').map(Number);
        const partsB = b.split('.').map(Number);

        const maxLength = Math.max(partsA.length, partsB.length);

        for (let i = 0; i < maxLength; i++) {
            const numA = partsA[i] || 0;
            const numB = partsB[i] || 0;

            if (numA !== numB) {
                return numA - numB;
            }
        }

        return 0;
    });
}

// 测试
const versions = ["1.0.1", "0.1", "1.3.26", "1.0.3.29", "2.1.3", "1.0.9.7.25"];
console.log(sortVersions(versions));
// 输出: ["0.1", "1.0.1", "1.0.3.29", "1.0.9.7.25", "1.3.26", "2.1.3"]

