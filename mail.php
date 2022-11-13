<?php
if(isset($_POST['submit']))
{
$user_Fname = $_POST['Fname'];
$user_Lname = $_POST['Lname'];
$user_email = $_POST['email'];
$user_subject = $_POST['subject'];
$user_message = $_POST['message'];
$email_form='noreply@aviansker.com';
$email_subject="$user_subject";
$email_body="Name:$user_Fname $user_Lname. \n".
                "\n".
                "\n".
                "Email : $user_email.\n".
                "\n".
                "\n".
                "Subject : $user_subject.\n".
                "\n".
                "\n".
                "Said : $user_message.\n";
$to_email="marcomark5050@gmail.com";
$headers="From:$email_form \r\n";
$headers .="Reply-To:$user_email \r\n";
 mail($to_email, $email_subject, $email_body, $headers)or die("Error!");
}
echo'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Maxatta</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap"
      rel="stylesheet"
    />
    <script src="main.js" defer></script>
  </head>
  <body>
    <header>
      <nav>
        <div class="logo"><img src="images/Logo.png" /></div>
        <ul>
          <li class="ListItem">
            <a href="./index.html">Home</a>
            <div class="outline inactive"></div>
          </li>
          <li class="ListItem"><a href="./investors.html">Investors</a></li>
          <li class="ListItem"><a href="./Connect.html">Connect</a></li>
          <li class="ListItem"><a href="./AboutUs.html">About Us</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <div class="empty"></div>
      <div class="content">
      <h1 style="text-align:center;color:white" >Thank you for contacting us. we will get back to you as soon as possible!</h1>
      <p style="text-align:center;color:white" class="back">Go back to the <a href="index.html">homepage</a>.</p>
      </div>
    </main>
    <footer>
      <div class="footerContent">
        <ul>
          <li>© 2022 Maxatta Ltd<span class="separator"> | </span></li>
          <li class="SecondListItems">
            <a href="./LegalDisclaimer.html">Legal Disclaimer</a
            ><span class="separator"> | </span>
            <div class="SecondOutline inactive"></div>
          </li>
          <li class="SecondListItems">
            <a href="./CookiePolicy.html">Cookie Policy</a
            ><span class="separator"> | </span>
          </li>
          <li class="SecondListItems">
            <a href="./PrivacyPolicy.html">Privacy Policy</a
            ><span class="separator"> | </span>
          </li>
          <li class="SecondListItems">
            <a href="./TermsofService.html">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  </body>
</html>
';
?>
