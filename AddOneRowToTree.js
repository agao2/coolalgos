/*

Given the root of a binary tree, then value v and depth d, you need to add a row of nodes with value v at the given depth d. The root node is at depth 1.

The adding rule is: given a positive integer depth d, for each NOT null tree nodes N in depth d-1, 
create two tree nodes with value v as N's left subtree root and right subtree root. 
And N's original left subtree should be the left subtree of the new left subtree root, its original right subtree should be the right subtree of the new right subtree root.
If depth d is 1 that means there is no depth d-1 at all, then create a tree node with value v as the new root of the whole original tree, 
and the original tree is the new root's left subtree.

*/


function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val)
	this.left = (left === undefined ? null : left)
	this.right = (right === undefined ? null : right)
}


const addOneRow = (root, v, d) => {

	let parentNodes = [root];
	let level = 1;

	const getChildren = (nodes) => {
		let children = [];
		for (let node of nodes) {
			children.push(node.left);
			children.push(node.right);
		}
		return children.filter(node => node);
	}

	if (level > d - 1) {
		const newRoot = new TreeNode(v, root, null);
		return newRoot;
	}

	while (level < d - 1) {
		++level;
		parentNodes = getChildren(parentNodes);
	}

	for (let parent of parentNodes) {
		const leftChild = parent.left;
		const rightChild = parent.right;
		parent.left = new TreeNode(v, leftChild, null);
		parent.right = new TreeNode(v, null, rightChild);
	}

	return root;
}