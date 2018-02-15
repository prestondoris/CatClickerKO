var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
    this.level =ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'Newborn';
        } else if (this.clickCount() >=10 && this.clickCount() < 100) {
            return "Infant";
        } else if (this.clickCount() >= 100 && this.clickCount() <200) {
            return "Teen";
        } else if (this.clickCount() >= 200){
            return "Adult";
        }
    }, this);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount()+1);
    };
}

ko.applyBindings(new ViewModel());
