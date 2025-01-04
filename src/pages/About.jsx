import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{ display: "flex", padding: "2rem" }}>
      <Stack sx={{ width: "50%" }}>
        <img
          src="src/assets/nepmart2.png"
          alt="Nep mart image"
          width="95%"
          height="100%"
        />
      </Stack>
      <Stack spacing={1} sx={{ width: "50%" }}>
        <Typography variant="h4" sx={{ textAlign: "justify" }}>
          Welcome to Nep Mart - Your Local Online Marketplace!
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          At Nep Mart, we are proud to bring the heart and soul of Nepal to your
          doorstep through our comprehensive online shopping experience. Based
          in the vibrant city of Kathmandu, we are committed to serving the
          unique needs of our community, offering an extensive range of products
          that cater to every aspect of life in Nepal.
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          Our vision is to be the leading e-commerce platform in Nepal, where
          customers can find and discover anything they might want to buy online
          at reasonable prices. We aim to transform the way Nepalis shop by
          providing convenience, diverse selection, and a seamless shopping
          experience.
        </Typography>

        <Typography variant="h5" sx={{ textAlign: "justify" }}>
          Our Mission
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          To Empower Local Businesses: We strive to empower local vendors and
          craftsmen by providing them with a robust online platform to showcase
          and sell their products, helping them to expand their reach and grow
          their businesses.
        </Typography>

        <Typography sx={{ textAlign: "justify" }}>
          We dedicate ourselves to serving our customers with dedication and
          integrity, ensuring they have access to a wide range of high-quality
          products at competitive prices
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          We are committed to innovation, utilizing technology to simplify the
          shopping process, while also enhancing the user experience with
          features suited specifically to the needs of our Nepalese customers.
        </Typography>

        <Typography variant="h5" sx={{ textAlign: "justify" }}>
          Our Products
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          From the latest electronics, fashion staples, and beauty products to
          traditional Nepali handicrafts, organic locally-sourced groceries, and
          much more, Nep Mart offers a diverse assortment of products. Each item
          is carefully selected to ensure it meets our high standards of quality
          and authenticity.
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "justify" }}>
          Why choose Nep Mart?
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          While our focus is on serving the needs of the Nepalese community, our
          standards are global. This means high-quality service, secure
          transactions, and a trustworthy return policy.
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          We believe in supporting our community, which is why we prioritize
          local products and collaborate with local artisans and farmers.
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          Our dedicated customer service team is always ready to assist you with
          any inquiries, ensuring your shopping experience is smooth and
          enjoyable.
        </Typography>

        <Typography variant="h5" sx={{ textAlign: "justify" }}>
          Join Us on Our Journey!
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          Whether you’re shopping for everyday needs, searching for unique local
          products, or a vendor looking to expand your reach, Nep Mart is here
          to serve you. Explore our site, discover new products, and experience
          the ease of online shopping with a local touch.
        </Typography>

        <Typography sx={{ textAlign: "justify" }}>
          Thank you for choosing Nep Mart. Happy shopping!
        </Typography>

        <Divider />
        <Typography sx={{ textAlign: "justify", fontStyle: "italic" }}>
          For any questions or feedback, please feel free to contact us at
          contact@nepmart.com. Join us on our social media pages to stay updated
          with the latest offers, products, and news from Nep Mart.
        </Typography>
      </Stack>
    </Box>
  );
};

export default About;
