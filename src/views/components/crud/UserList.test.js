// UserList.test.js
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

// モックデータを作成
const mockUsers = [
  { id: 1, name: "Jun", param1: 250, param2: 150, param3: 200},
  { id: 2, name: "June", param1: 100, param2: 50, param3: 350}
];

// グローバルのfetch関数をモック
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockUsers),
  })
);

test('renders user list', async () => {
  // コンポーネントをレンダリング
  render(<UserList />);

  // fetchが呼ばれたことを確認
  expect(fetch).toHaveBeenCalledTimes(1);

  // ユーザー名が表示されることを確認
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });
});
