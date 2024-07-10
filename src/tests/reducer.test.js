// 导入reducer
import { reducer, loveReducer } from "../reducer/index";

// 测试用例的描述
describe('reducer tests', () => {
  // 测试初始状态
  test('should initialize with count 0', () => {
    expect(reducer(undefined, {})).toEqual({ count: 0 });
  });

  // 测试增加操作
  test('should handle the add action', () => {
    expect(reducer({ count: 0 }, { type: 'add' })).toEqual({ count: 1 });
  });
});

describe('loveReducer tests', () => {
  // 测试初始状态
  test('should initialize with status false and type normal', () => {
    expect(loveReducer(undefined, {})).toEqual({
      status: false,
      type: 'normal',
    });
  });

  // 测试发送爱心
  test('should handle the send_love action', () => {
    expect(loveReducer({ status: false }, { type: 'send_love' })).toEqual({
      status: true,
    });
  });

  // 测试停止爱心
  test('should handle the stop_love action', () => {
    expect(loveReducer({ status: true }, { type: 'stop_love' })).toEqual({
      status: false,
    });
  });

  // 测试变酷
  test('should handle the be_cool action', () => {
    expect(loveReducer({ type: 'normal' }, { type: 'be_cool' })).toEqual({
      type: 'cool',
    });
  });

  // 测试恢复正常
  test('should handle the be_normal action', () => {
    expect(loveReducer({ type: 'cool' }, { type: 'be_normal' })).toEqual({
      type: 'normal',
    });
  });
});