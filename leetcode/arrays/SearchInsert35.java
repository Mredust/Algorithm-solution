package arrays;

public class SearchInsert35 {
    /**
     * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置
     * @param nums
     * @param target
     * @return int
     */
    public int searchInsert(int[] nums, int target) {

        int i = 0, j = nums.length - 1, res = nums.length;

        while (i <= j) {
            int m = (i + j) >>> 1;
            if (target <= nums[m]) {
                res = m;
                j = m - 1;
            } else if (nums[m] < target) {
                i = m + 1;
            }
        }
        return res;
    }
}
