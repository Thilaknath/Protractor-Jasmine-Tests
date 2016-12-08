// spec.js
var taskPage = require('/home/sand/appdirect/tests/endtoend/toDo/toDoPageObj.js');

describe('Appdirect Technical Test', function() {
    
    var placeholder = element(by.id('header'));
    var taskCount = element.all(by.repeater('todo in todos'));
    var todos = element.all(by.css('[class="ng-binding"]')); 
    var checkToDo = element.all(by.css('[type="checkbox"]'));

    it('should Launch the browser with testURL', function() {
        taskPage.go();
    });
    
    it('should verify the heading of the website', function() {
        expect(placeholder.getText()).toEqual('todos');
    });
    
    it('should add a single task, delete task and verify it', function() {
        taskPage.addTask('RUN');
        taskPage.deleteTask();
         expect(todos.get(0).getText()).toBe('');
    });
    
    it('should add a new task and verify the count', function() {
        taskPage.addTask('RUN')
        expect(taskCount.count()).toEqual(1);
    });
    
    it('should verify the newly added task on screen', function() {
        expect(todos.get(0).getText()).toBe('RUN');
    });
    
    it('should change the newly added task name on screen', function() {
        taskPage.changeTaskName();
    });
    
    it('should verify the modified task name on screen', function() {
        expect(todos.get(0).getText()).toBe('RU');
    });
    
    
    it('should check a added task marking it done', function() {
        checkToDo.get(0).click();
    });
    
    it('should clear completed tasks from the list', function() {
        taskPage.clearTask()
    });
    
    it('should add multiple tasks and verify the count', function() {
        taskPage.addTask('WALK');
        taskPage.addTask('CRAWL');
        taskPage.addTask('JUMP');
        expect(taskCount.count()).toEqual(3);
    });
    
    it('should verify the completed task is removed from todos', function() {
        expect(todos.get(0).getText()).toBe('WALK');
    });
    
});
