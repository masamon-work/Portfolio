<head>
    <link href="style/contact_send.css" rel="stylesheet">
</head>
<body>
    <h2> Confirm the input content.</h2>
    <?php
    $name = $_POST["name"];
    $tell = $_POST["tell"];
    $email = $_POST["email"];
    $genre = $_POST["genre"];
    $content = $_POST["content"];

    echo "<div class=echo><span>Name：</span>".$name."<br></div>";
    echo "<div class=echo><span>Tel：</span>".$tell."<br></div>";
    echo "<div class=echo><span>E-Mail：</span>".$email."<br></div>";
    echo "<div class=echo><span>Type：</span>".$genre."<br></div>";
    echo "<div class=echo><span>content：</span>".$content."<br></div>";
    ?>
    <form method="post" action="contact.php">
        <input type="hidden" name="name" value="<?php echo $name; ?>">
        <input type="hidden" name="tell" value="<?php echo $tell; ?>">
        <input type="hidden" name="email" value="<?php echo $email; ?>">
        <input type="hidden" name="genre" value="<?php echo $genre; ?>">
        <input type="hidden" name="content" value="<?php echo $content; ?>">
        <div class="button">
            <input type="submit" value="Revise">
        </div>
    </form>
    <p>Can you send this content?</p>
    <a href="contact.php">Back</a>
</body>