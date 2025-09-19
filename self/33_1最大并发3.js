const tasks = [
  function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(0);
        resolve(0);
      }, 2000);
    });
  },
  function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(1);
        resolve(1);
      }, 1000);
    });
  },
  function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(2);
        resolve(2);
      }, 5000);
    });
  },
  function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(3);
        resolve(3);
      }, 3000);
    });
  },
];

function main(lists) {
  const concurrency = 2;
  const tasksCopy = [...lists];
  let taskArr = [];

  async function handlePromise(task, index) {
    return task()
      .then(() => {
        return { status: 'success', index };
      })
      .catch(() => {
        taskArr.push(task);
        return { status: 'error', index };
      });
  }

  taskArr = tasksCopy.splice(0, concurrency).map((item, index) => {
    return handlePromise(item, index);
  });

  return tasksCopy.reduce(async (acc, cur) => {
    const res = await acc;
    if (res && res.status === 'success') {
      taskArr[res.index] = handlePromise(cur, res.index);
    }
    return Promise.race(taskArr);
  }, Promise.race(taskArr));
}
main(tasks);
