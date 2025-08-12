import type { CollectionConfig } from 'payload'

export const Test: CollectionConfig = {
  slug: 'test',
  access: {
    create: () => true, // Cho phép mọi người tạo bản ghi
    read: () => true, // Bạn có thể thêm cả quyền đọc nếu cần
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}
