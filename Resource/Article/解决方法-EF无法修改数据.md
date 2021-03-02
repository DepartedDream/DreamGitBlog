# 错误信息

Unable to update the EntitySet 'Users' because it has a DefiningQuery and no InsertFunction element exists in the ModificationFunctionMapping element to support the current operation.

# 解决方法

检查该 Entity 对应的 表是否没有主键，设置表的主键，确保Entity的主键和表的主键一致