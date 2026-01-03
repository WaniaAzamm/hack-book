import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './Footer.module.css';

function FooterLinkItem({item}) {
  const {to, href, label, prependBaseUrlToHref, ...props} = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  return (
    <Link
      className={clsx('footer__link-item', styles.footer__linkItem)}
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
}

function FooterLinkCategory({title, items}) {
  return (
    <div className="col footer__col">
      <h3 className="footer__title">{title}</h3>
      <ul className="footer__items">
        {items.map((item, i) => (
          <li key={i} className="footer__item">
            <FooterLinkItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLinks({links}) {
  if (!links) {
    return null;
  }

  return (
    <div className="row footer__links">
      {links.map((linkItem, i) => (
        <FooterLinkCategory
          key={i}
          title={linkItem.title}
          items={linkItem.items}
        />
      ))}
    </div>
  );
}

function Copyright({copyright}) {
  if (!copyright) {
    return null;
  }
  return (
    <div className="footer__copyright">
      <div dangerouslySetInnerHTML={{__html: copyright}} />
    </div>
  );
}

function Footer() {
  const {footer} = useThemeConfig();
  const {copyright, links, logo} = footer || {};

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={clsx('footer', 'footer--dark', styles.footer)}>
      <div className="container container-fluid">
        {links && links.length > 0 && <FooterLinks links={links} />}
        <div className={clsx('footer__bottom', styles.footerBottom)}>
          {logo && logo.src && (
            <div className="footer__logo-container">
              <img className="footer__logo" alt={logo.alt} src={useBaseUrl(logo.src)} />
            </div>
          )}
          <Copyright copyright={copyright} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;