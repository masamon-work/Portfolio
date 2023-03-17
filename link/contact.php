<head>
    <link href="style/contact.css" rel="stylesheet">
</head>
<body>
    <?php
        if(isset($_POST["name"])){
            $name = $_POST["name"];
            $tell = $_POST["tell"];
            $email = $_POST["email"];
            $genre = $_POST["genre"];
            $content = $_POST["content"];
        } else {
            $name = "";
            $tell = "";
            $email = "";
            $genre = "";
            $content = "";
        }
    ?>
    <h2>Contact Form</h2>
    <form action="contact_send.php" method="post">
        <span>Name</span>
        <input type="text" name="name" required placeholder="Ryotaro　Masamoto" value="<?php echo $name1; ?>">
        <br>
        <span>Tel</span>
        <input type="tel" name="tell" pattern="\d{2,4}-\d{2,4}-\d{3,4}" required placeholder="090-XXXX-ZZZZ" value="<?php echo $tell; ?>">
        <br>
        <span>E-Mail</span>
        <input type="email" name="email" required placeholder="○○○@○○○" value="<?php echo $email; ?>">
        <br>
        <span>Type</span>
        <select name="genre">
            <option value="Work" selected>Work</option>
            <option value="Question">Question</option>
            <option value="Other">Other</option>
        </select>
        <br>
        <div class="txtarea">
            <span>content</span>
            <!-- <input type="text" name="content"> -->
            <textarea name="content" rows="5" cols="30"><?php echo $content; ?></textarea>
        </div>
        <br>
        <div class="button">
            <input type="submit" value="Send">
            <input type="reset" value="Reset">
        </div>
    </form>
</body>