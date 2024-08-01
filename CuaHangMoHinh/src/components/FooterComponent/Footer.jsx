import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterLink,
  SocialMedia,
  SocialIcon,
} from './style';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Trang Chủ' },
    { href: '/product', label: 'Sản Phẩm' },
    { href: '#', label: 'Dịch Vụ' },
    { href: '#', label: 'Liên Hệ' },
  ];

  const contactInfo = {
    email: 'lyphuchuong012@gmail.com',
    phone: '0379018450',
    address: '331 QL1A, An Phú Đông, Quận 12, Tp.HCM',
  };

  const socialLinks = [
    { href: '#', icon: <FaFacebookF /> },
    { href: '#', icon: <FaTwitter /> },
    { href: '#', icon: <FaInstagram /> },
    { href: '#', icon: <FaLinkedinIn /> },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Về Chúng Tôi</FooterTitle>
          <p>
            Chúng tôi là cửa hàng hàng đầu trong việc cung cấp các sản phẩm mô
            hình chất lượng cao. Sứ mệnh của chúng tôi là mang đến trải nghiệm
            mua sắm tốt nhất cho khách hàng.
          </p>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Liên Kết Nhanh</FooterTitle>
          {quickLinks.map((link) => (
            <FooterLink key={link.label} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Liên Hệ Chúng Tôi</FooterTitle>
          <p>Email: {contactInfo.email}</p>
          <p>Phone: {contactInfo.phone}</p>
          <p>Địa chỉ: {contactInfo.address}</p>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Theo Dõi</FooterTitle>
          <SocialMedia>
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} href={link.href}>
                {link.icon}
              </SocialIcon>
            ))}
          </SocialMedia>
        </FooterColumn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;