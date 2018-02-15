var Cat = function() {
    var self = this;

    self.clickCount = ko.observable(0);
    self.name = ko.observable('Tabby');
    self.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    self.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
    self.level =ko.computed(function() {
        if (self.clickCount() < 10) {
            return 'Newborn';
        } else if (self.clickCount() >=10 && self.clickCount() < 100) {
            return "Infant";
        } else if (self.clickCount() >= 100 && self.clickCount() <200) {
            return "Teen";
        } else if (self.clickCount() >= 200){
            return "Adult";
        }
    }, self);

    self.altNames = ko.observableArray([
        {nickname: 'Muffin'},
        {nickname: 'Ginger'},
        {nickname: 'Lady'}
    ]);
}

var ViewModel = function() {
    var self = this;

    self.currentCat = ko.observable(new Cat());

    self.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount()+1);
    };
}

ko.applyBindings(new ViewModel());
