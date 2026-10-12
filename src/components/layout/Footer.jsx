import { Link } from 'react-router-dom';

const groups = [
  {
    title: 'Get to Know Us',
    links: ['Careers', 'Amazonia Science', 'Press Center', 'Investor Relations'],
  },
  {
    title: 'Make Money with Us',
    links: ['Sell products', 'Become an affiliate', 'Advertise', 'Fulfillment partners'],
  },
  {
    title: 'Amazonia Payment',
    links: ['Business Card', 'Shop with Points', 'Reload Balance', 'Currency Converter'],
  },
  {
    title: 'Let Us Help You',
    links: ['Your Account', 'Returns Center', 'Shipping Rates', 'Help'],
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-amazon-navy text-white">
      <a href="#top" className="block bg-amazon-panel py-3 text-center text-sm transition hover:bg-slate-700">
        Back to top
      </a>
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <section key={group.title}>
            <h2 className="text-base font-bold">{group.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {group.links.map((link) => (
                <li key={link}>
                  <a className="transition hover:text-amazon-gold" href="/">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-300">
        <Link to="/" className="font-black text-white">
          Amazonia
        </Link>
        <span className="ml-3">Modern ecommerce demo built with React and Tailwind.</span>
      </div>
    </footer>
  );
}
