<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Template Title</title>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href='../mainstyle.css'>
    <link rel="stylesheet" type="text/css" href='../flexnav.css'>

</head>

<body>
    <script>
        function topNavButton() {
            document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
        }
    </script>
    <header>
        <?php include 'mainheader.php'    ?>
    </header>
    <nav>
        <?php include 'mainnav.php'    ?>
    </nav>
    <main>
        <h1 class="center"> This is a Template </h1>
        <img class='center' id="mainphoto" src="TempPhoto.png" alt="photo" height="175" width="175">
        <ul class='center'>
            <li>Summary:This is a template for creating each page to pass of topics. Please edit this text and put the summary on how the page contains sufficent work to pass of the topic in question.</li>
        </ul>

    </main>
    <footer>
        <?php include 'mainfooter.php'  ?>
            <small>Last Updated: Feb 21, 2019</small>
    </footer>
</body>

</html>