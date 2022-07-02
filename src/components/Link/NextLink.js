import NextLink from 'next/link'

export default function Link({children, href}) {
  return (
    <div>
        <NextLink href={href}>
          <a>{children}</a>
        </NextLink>
    </div>
  );
}
