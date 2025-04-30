import { useIntl } from '@umijs/max';
import { Avatar, Card, Col, Row, Space, Tag } from 'antd';
import React from 'react';
import styles from './index.less';
const { Meta } = Card;

interface HubItem {
  id: string;
  name: string;
  category: string;
  technologyType: string;
  description: string;
}

interface TechnologyTagProps {
  technologyType: string[];
  onClick: (type: string) => void;
  selectedType?: string;
}

const TechnologyTag: React.FC<TechnologyTagProps> = ({ technologyType, onClick, selectedType }) => {
  const intl = useIntl();

  return (
    <div className="flex">
      <span className="t" style={{ marginRight: 8 }}>
        {intl.formatMessage({ id: 'pages.hub.search.technologyType' })}
      </span>
      <Space wrap>
        {technologyType.map((type) => (
          <Tag
            key={type}
            color={selectedType === type ? 'green' : 'default'}
            onClick={() => onClick(type)}
            style={{ cursor: 'pointer' }}
          >
            {intl.formatMessage({ id: `pages.hub.search.types.${type}` })}
          </Tag>
        ))}
      </Space>
    </div>
  );
};

const SearchContent: React.FC = () => {
  const [selectedType, setSelectedType] = React.useState<string>('all');

  const technologyTypes = ['all', 'machining', '3dPrinting', 'injectionMolding'];

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
    // You can add additional search filtering logic here
  };

  return (
    <Card variant="borderless">
      <TechnologyTag
        technologyType={technologyTypes}
        onClick={handleTypeClick}
        selectedType={selectedType}
      />
    </Card>
  );
};
interface HubContainerProps {
  data: HubItem[]; // 接收一个 HubItem 数组作为 props
}
const HubContainer: React.FC<HubContainerProps> = ({ data }) => {
  const intl = useIntl();
  return (
    <Row gutter={[16, 16]} className="hub-container">
      {data.map((item) => (
        <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={6}>
          <Card
            className={styles['hub-card']}
            variant="borderless"
            actions={[
              <a key="receive">{intl.formatMessage({ id: 'pages.hub.hubCard.btn1' })}</a>,
              <a key="details">{intl.formatMessage({ id: 'pages.hub.hubCard.btn2' })}</a>,
            ]}
          >
            <span className={styles['hub-card-category']}>{item.category}</span>
            <Meta
              avatar={<Avatar size={60} src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              description={
                <div className={styles.description}>
                  CNC机加工，共有3个图纸，其中包含工艺有喷砂、抛光、氧化等，总价格为￥1000元，预计交货时间为5天，利润￥200元。
                </div>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

const App: React.FC = () => {
  // 模拟数据
  const hubData: HubItem[] = [
    {
      id: '1',
      name: 'CNC加工',
      technologyType: 'machining',
      category: 'CNC', // 计算机数控加工
      description: '高精度CNC加工服务',
    },
    {
      id: '2',
      name: 'FDM打印',
      technologyType: '3dPrinting',
      category: '3DP', // 3D打印
      description: '熔融沉积成型(FDM)3D打印',
    },
    {
      id: '3',
      name: '注塑成型',
      technologyType: 'injectionMolding',
      category: 'IM', // 注塑成型
      description: '大批量注塑生产',
    },
    {
      id: '4',
      name: '五轴加工',
      technologyType: 'machining',
      category: 'CNC',
      description: '五轴联动精密加工',
    },
    {
      id: '5',
      name: 'SLA打印',
      technologyType: '3dPrinting',
      category: '3DP',
      description: '光固化(SLA)快速成型',
    },
    {
      id: '6',
      name: '模具制造',
      technologyType: 'injectionMolding',
      category: 'MOLD', // 模具
      description: '高质量模具制造',
    },
    {
      id: '7',
      name: '激光切割',
      technologyType: 'machining',
      category: 'LASER', // 激光加工
      description: '精密激光切割服务',
    },
    {
      id: '8',
      name: '表面处理',
      technologyType: 'machining',
      category: 'POST', // 后处理
      description: '喷砂/抛光/氧化等',
    },
    {
      id: '9',
      name: '钣金加工',
      technologyType: 'machining',
      category: 'SHEET', // 钣金
      description: '专业钣金加工服务',
    },
    {
      id: '10',
      name: 'SLM打印',
      technologyType: '3dPrinting',
      category: '3DP',
      description: '金属粉末激光烧结(SLM)',
    },
    {
      id: '11',
      name: '吹塑成型',
      technologyType: 'injectionMolding',
      category: 'IM',
      description: '中空制品吹塑成型',
    },
    {
      id: '12',
      name: 'EDM加工',
      technologyType: 'machining',
      category: 'EDM', // 电火花加工
      description: '精密电火花加工',
    },
  ];
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <SearchContent />
      <HubContainer data={hubData} />
    </Space>
  );
};

export default App;
