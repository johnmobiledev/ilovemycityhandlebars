 exports.home = function(req, res){
    res.render('home',{headTitle: 'We belive that every city have something to say', title: 'i Love My City', content: "Home content"});
}


exports.page = function(req, res){
   var headTitle, title, content;
    title = "I Love My City";
    
    if(req.params.page == 'about-us'){
        headTitle = 'AboutUs';
        title = "About Us";
        content = "We are in learning";
    }
     if(req.params.page == 'who-we-are'){
        headTitle = 'Who We Are';
        title = "Who we are";
        content = "Who we are details";
    }
    if(req.params.page == 'what-we-have-done'){
        headTitle = 'What we have done';
        title = "What We Have Done";
        content = "So far what we have done";
    }
    if(req.params.page == 'programmes'){
        headTitle = 'Programmes';
        title = "Programmes";
        content = "Program details";
    }
    if(req.params.page == 'facilities-amenities'){
        headTitle = 'Facilities & Amenties';
        title = "Facilities & Amenties";
        content = "Facilities & Amenties details";
    }
    if(req.params.page == 'admissions'){
        headTitle = 'Admissions';
        title = "Admissions";
        content = "Admissions details";
    }
    
    
    res.render('page', {title: title, headTitle: headTitle, content: content});
}