'use strict';

//Function to retrieve the URL

module.exports = {
    toDo: {
        addTask: element(by.id('new-todo')),
        checkbox: element.all(by.repeater('todo in todos')),
        clearCompleted: element(by.buttonText('Clear completed')),
        deleteTask: element(by.css('[class="destroy"]')),
        todos: element.all(by.css('[ng-dblclick="editTodo(todo)"]'))
    },

    todoList: {
        get: function() {
            return element.all(by.repeater('todo in todos'));
        }
    },

    go: function() {
        browser.get('http://todomvc.com/examples/angularjs/#/');
    },

    verifyPlaceholder: {
        get: function() {
            return element(by.id('new-todo')).getText();
        }
    },

    addTask: function(task) {
        var tasks = this.toDo;

        tasks.addTask.isDisplayed();
        tasks.addTask.sendKeys(task);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    },
    
    clearTask: function() {
        var tasks = this.toDo;
        
        tasks.clearCompleted.isDisplayed();
        tasks.clearCompleted.click();
    },
    
    deleteTask: function() {
        var tasks = this.toDo;
        
        browser.actions().doubleClick(tasks.todos.get(0)).perform();
        browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
        browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
        browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    },
    
    changeTaskName: function(newName) {
        var tasks = this.toDo;      
        
        browser.actions().doubleClick(tasks.todos.get(0)).perform();
        browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    },
    
    
};