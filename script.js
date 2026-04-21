function showWelcomePrompt() {
    var name;
    name = window.prompt("Please enter your name", "Guest");

    if (name === null || name === "") {
        document.getElementById("welcomeText").innerHTML = "Hello Guest, welcome to VIP Restaurant Booking!";
    } else {
        document.getElementById("welcomeText").innerHTML = "Hello " + name + ", welcome to VIP Restaurant Booking!";
    }
}

function changePictureAndText() {
    var picture;
    var caption;

    picture = document.getElementById("projectImage");
    caption = document.getElementById("pictureCaption");

    if (picture.src.indexOf("photobooking.png") !== -1) {
        picture.src = "loginphoto.jpeg";
        caption.innerHTML = "Luxury indoor seating for fast reservations.";
    } else {
        picture.src = "photobooking.png";
        caption.innerHTML = "Reserve your table quickly and avoid waiting lines.";
    }
}

function updateAvailabilitySummary() {
    var tableBody;
    var rows;
    var i;
    var available;
    var booked;
    var statusCell;

    tableBody = document.getElementById("availabilityBody");
    rows = tableBody.getElementsByTagName("tr");
    available = 0;
    booked = 0;

    for (i = 0; i < rows.length; i++) {
        statusCell = rows[i].getElementsByTagName("td")[2];

        if (statusCell.innerHTML === "Available") {
            available++;
            statusCell.style.color = "#00aa44";
            statusCell.style.fontWeight = "bold";
        } else {
            booked++;
            statusCell.style.color = "#aa0000";
            statusCell.style.fontWeight = "bold";
        }
    }

    document.getElementById("summaryText").innerHTML = "Available tables: " + available + " | Booked tables: " + booked;
}

function chooseListStyle() {
    var choice;
    var list;
    var title;

    list = document.getElementById("benefitsList");
    title = document.getElementById("benefitsTitle");
    choice = window.prompt("Select a list style:\n1 (numbered), 2 (lettered), 3 (roman numerals)", "1");

    switch (choice) {
        case "1":
            list.style.listStyleType = "decimal";
            title.innerHTML = "Benefits of Our Website (Numbered List)";
            break;
        case "2":
            list.style.listStyleType = "upper-alpha";
            title.innerHTML = "Benefits of Our Website (Lettered List)";
            break;
        case "3":
            list.style.listStyleType = "upper-roman";
            title.innerHTML = "Benefits of Our Website (Roman Numbered List)";
            break;
        default:
            window.alert("Invalid choice. Please enter 1, 2 or 3.");
    }
}

function suggestTable() {
    var guests;
    var suggestion;

    guests = window.prompt("Enter the number of guests", "2");
    guests = parseInt(guests);

    if (guests <= 2) {
        suggestion = "We suggest a 2-seat table.";
    } else if (guests <= 4) {
        suggestion = "We suggest a 4-seat table.";
    } else if (guests <= 6) {
        suggestion = "We suggest a 6-seat table.";
    } else {
        suggestion = "We suggest a large family table.";
    }

    document.getElementById("suggestionText").innerHTML = suggestion;
}

function validateLoginForm() {
    var userName;
    var password;

    userName = document.getElementById("loginUsername").value;
    password = document.getElementById("loginPassword").value;

    if (userName === "" || password === "") {
        window.alert("Please enter username and password.");
        return false;
    }

    if (password.length < 6) {
        window.alert("Password must contain at least 6 characters.");
        return false;
    }

    window.alert("Login completed successfully.");
    return true;
}

function validateSignupForm() {
    var fullName;
    var email;
    var password;
    var age;

    fullName = document.getElementById("signupName").value;
    email = document.getElementById("signupEmail").value;
    password = document.getElementById("signupPassword").value;
    age = document.getElementById("signupAge").value;

    if (fullName === "" || email === "" || password === "" || age === "") {
        window.alert("Please complete all signup fields.");
        return false;
    }

    if (password.length < 6) {
        window.alert("Password must be at least 6 characters.");
        return false;
    }

    if (parseInt(age) < 18) {
        window.alert("You must be 18 or older to create an account.");
        return false;
    }

    window.alert("Signup completed successfully.");
    return true;
}

function changeBoxColor(boxId, colorValue) {
    document.getElementById(boxId).style.backgroundColor = colorValue;
}

function showCurrentGreeting() {
    var currentDate;
    var currentHour;
    var greeting;

    currentDate = new Date();
    currentHour = currentDate.getHours();

    if (currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    document.getElementById("greetingText").innerHTML = greeting + " and welcome to our restaurant website.";
}
