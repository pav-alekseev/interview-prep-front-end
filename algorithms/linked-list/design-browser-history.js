const Site = function(url, next, prev) {
    this.url = url;
    this.next = next;
    this.prev = prev;
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = new Site(homepage);
    this.pointer = this.history;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    const site = new Site(url);
    site.prev = this.pointer;
    this.pointer.next = site;
    this.pointer = site;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    for (let i = 0; i < steps && this.pointer !== this.history; i++) {
        this.pointer = this.pointer.prev;
    }

    return this.pointer.url;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    for (let i = 0; i < steps && !!this.pointer.next; i++) {
        this.pointer = this.pointer.next;
    }

    return this.pointer.url;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
