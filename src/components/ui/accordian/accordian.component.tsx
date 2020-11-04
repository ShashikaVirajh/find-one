import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

import { Label } from 'components/ui';
import { AccordianItem } from 'types/data.types';
import styles from './accordian.styles';

const Accordian = ({ items, expandIcon, collapseIcon, questionStyels, answerStyles }: IProps) => {
  const [expandedId, setExpandedId] = useState('');

  const toggleExpanded = (id: string) => setExpandedId(expandedId === id ? '' : id);

  const renderItemList = () =>
    items.map((item: AccordianItem) => (
      <View key={item.id}>
        <Pressable style={styles.row} onPress={() => toggleExpanded(item.id)}>
          <Label text={item.question} style={[styles.question, questionStyels]} />
          <View style={styles.icon}>{item.id === expandedId ? collapseIcon() : expandIcon()}</View>
        </Pressable>

        {item.id === expandedId && (
          <Label text={item.answer} style={[styles.answer, answerStyles]} />
        )}
      </View>
    ));

  return <View style={styles.container}>{renderItemList()}</View>;
};

interface IProps {
  items: AccordianItem[];
  expandIcon?: () => JSX.Element;
  collapseIcon?: () => JSX.Element;
  questionStyels?: Object;
  answerStyles?: Object;
}

export default Accordian;
