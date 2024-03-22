const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({
  origin: true,
});
admin.initializeApp();
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  auth: {
    user: "team@posterfans.com",
    pass: "Ter9ence!",
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const dest = req.query.dest;
    const type = req.query.type;
    const content = req.query.content;
    let html = '';
    let subject = '';
    subject = 'Posterfans Enquiry';
    html = content;
    if(type=='welcome')
    {
      subject = 'Welcome to Posterfans';
      html = `<div style="text-align: justify;"><strong>Posterfans Registration</strong></div>
<div style="text-align: justify;"><br></div>
<div style="text-align: justify;">Thank you for registering your free Collector Account with Posterfans. <br>Our goal is to provide a best in class platform for music collectors, artists and dealers to display their posters, flyers, setlists, vinyl/tapes/cds, music related artwork, t-shirts, instruments and other music related collectibles.&nbsp;</div>
<div style="text-align: justify;"><br></div>
<div style="text-align: justify;">With your free <strong>Collector Account</strong> you can now</div>
<ul>
    <li>
        <div style="text-align: justify;">Upload your collection to your personal gallery</div>
    </li>
    <li>
        <div style="text-align: justify;">Share individual pieces or your entire gallery by posting links directly to social media or email.</div>
    </li>
    <li>
        <div style="text-align: justify;">Receive and reply to comments on your collectibles.</div>
    </li>
    <li>
        <div style="text-align: justify;">Follow Collector and Dealer Accounts of interest to see their latest updates.</div>
    </li>
    <li>
        <div style="text-align: justify;">Upgrade to a Dealer Account at any time.</div>
    </li>
</ul>
<div style="text-align: justify;">With a <strong>$10 per month</strong> <strong>Dealer Account&nbsp;</strong>you can also</div>
<ul>
    <li>
        <div style="text-align: justify;">Add prices to listings for unlimited selling without transaction fees.</div>
    </li>
    <li>
        <div style="text-align: justify;">Upload a bio with links to your eBay, Discogs, or other existing website.</div>
    </li>
    <li>
        <div style="text-align: justify;">Allow users to contact you through direct email, phone, social media or contact form.</div>
    </li>
    <li>
        <div style="text-align: justify;">Comment on collectibles</div>
    </li>
</ul>
<div style="text-align: justify;">Because we do not take transaction fees, we are happy to connect collectors and dealers with each other directly. We believe this allows for maximum flexibility and enjoyment - something that is missing from marketplaces concerned with protecting fees.</div>
<div style="text-align: justify;"><br></div>
<div style="text-align: justify;">As always, collectors should protect themselves when transacting online. We have found that Paypal goods and services is a useful tool for protecting both buyers and sellers. However, Collectors and Dealers proceed at their own risk, and by registering an account with Posterfans users acknowledge that Posterfans bears no responsibility for transactions between users. There will be bad actors on any platform and therefore we cannot stress enough the need for buyers to protect themselves and encourage them to do so to the fullest extent possible.<br><br>We would never advise using friends and family payments or any other payment method that does not protect the user. Their is inherent risk in conducting business online and we advise users to proceed with caution and at their own risk, as Posterfans will not intervene or mediate transactions that go sideways. By completing registration users agree to hold Posterfans harmless in any and all transactions.</div>
<div style="text-align: justify;"><br></div>
<div style="text-align: justify;">We hope to encourage the growth of the music collecting hobby.<br>Thank you.<br></div>
<div style="text-align: justify;">To complete your registration please <a href="https://poster-fans.web.app/Login">Click here</a> to verify your email. <br><br>Welcome to Posterfans!</div>`;
    }
    if(type=='purchase')
    {
      subject = 'Dealer Account Confirmation';
      html = `<div>Thank you for opening your Posterfans Dealer Account.</div>
<div><br></div>
<div>Please visit the Your Gallery page and update it with links to your eBay, Discogs or any personal websites you wish to steer buyers to. With a Dealer Account you can update your Biography with direct phone number, email, social media and any other description you wish. At Posterfans we encourage Dealers to communicate directly with customers however they may choose. Additionally, as a Dealer you will be listed in our Dealer directory in the dropdown menu so be sure to choose a snazzy user name, cover image and user photo. Consider each collectible you post to be an advertisement for your brand. We recommend engaging with users who post their collectibles by commenting. Insightful comments serve as advertisements of your brand as well. Finally, with no additional transaction fees or costs, we hope you share your personal link for Your Gallery page on social media and in email, as it will bring users directly to your inventory on site (as well as your eBay, Discogs and other websites inventories). Your personal link to your Dealer gallery can be found on your Profile page.</div>
<div><br></div>
<div>Please let us know what you think of our service as we value our Dealer supporters.</div>
<div><br></div>
<div>Posterfans Team</div>`;
    }
    const mailOptions = {
      from: "Posterfans Team <team@posterfans.com>",
      to: dest,
      subject: subject,
      html: html,
    };
    // returning result
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.send(error.toString());
      }
      return res.send("Sent");
    });
  });
});