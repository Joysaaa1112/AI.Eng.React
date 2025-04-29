import { Card, Flex, theme } from 'antd';

const SearchContent: React.FC = () => {
  const { useToken } = theme;
  const { token } = useToken();
  console.log(token);

  return (
    <Card variant="borderless">
      <Flex>
        <div className="flex">
          <span className="t">技术类型</span>
        </div>
      </Flex>
    </Card>
  );
};

export default SearchContent;
