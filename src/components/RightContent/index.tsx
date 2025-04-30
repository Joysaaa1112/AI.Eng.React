import { QuestionCircleOutlined } from '@ant-design/icons';
import { SelectLang as UmiSelectLang, useIntl } from '@umijs/max';
import { Switch } from 'antd';
import React from 'react';
export type SiderTheme = 'light' | 'dark';

export const SelectLang = () => {
  return <UmiSelectLang />;
};

export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://pro.ant.design/docs/getting-started');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};

export const HubSwitch: React.FC<{
  onChange: (checked: boolean) => void;
  checked: boolean; // 👈 必传，受控
  disabled?: boolean;
  loading?: boolean;
}> = ({ onChange, checked, disabled, loading }) => {
  const is_mobile = window.innerWidth < 480;
  const intl = useIntl();
  const switchName = intl.formatMessage({
    id: 'component.RightContent.HubSwitch' + (is_mobile ? '.switchName2' : '.switchName'),
  });

  return (
    <div className="flex ml-24">
      <span className="t">{switchName}</span>
      <Switch
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        loading={loading}
        size={is_mobile ? 'small' : 'default'}
      />
    </div>
  );
};
