import LinkContainer from '../link-container';

const Header = () => {
  return (
    <header className="flex bg-gray-200 items-center p-4 justify-between">
      <div className="flex gap-4">
        <LinkContainer to="/" text="خانه" />
        <LinkContainer to="/auth/register" text="ثبت نام" />
        <LinkContainer to="/auth/login" text="ورود کاربری" />
        <LinkContainer to="/about" text="درباره ما" />
      </div>
    </header>
  );
};

export default Header;
