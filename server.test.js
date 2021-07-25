const cron = require('node-cron');
//mock cron.schedule to do nothing - just to prevent scheduled tasks from firing during tests
cron.schedule = jest.fn().mockImplementation((f) => {
  console.log(`prevented task with frequency "${f}" from being scheduled`);
});

const server = require('./server.js');
const db = require('./db.js');
const schedule = require('./schedule.js');

describe('scheduled tasks run', ()=>{
  it('schedules specified tasks', async () => {
    const testSequence = ["M", "T", "W", "R", "M"] // <--- specify sequence of test items to run here
      .map((testItem) => [
        ...schedule.filter(scheduleItem => 
          scheduleItem.eventTitle === testItem
        )
      ]).flat();
    //run the specified sequence of tasks:
    testSequence.forEach(async(testItem) => {
      await testItem.callback();
    });
    const testTableData = await db.get('TestTable');
    expect(testTableData[0].TestItem).toBe("T");
  })
})